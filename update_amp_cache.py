#!/usr/bin/env python3

import base64
import glob
import readline
import time

import OpenSSL
from OpenSSL import crypto
import requests
from requests.packages.urllib3 import exceptions

CACHE_DOMAIN = 'cdn.ampproject.org'

"""
Invalidates the AMP cache for a given URL following the guidelines at
https://developers.google.com/amp/cache/update-cache

=============
Prerequisites
=============

1. Create your private and public key
2. Publish the public key to your website at /.well-known/amphtml/apikey.pub
3. install the requests and OpenSSL libraries for Python 3

=======
Running
=======

To run this script::
    ./update_amp_cache.py
"""
class CacheUpdate:

    def __init__(self):
        requests.packages.urllib3.disable_warnings(exceptions.InsecureRequestWarning)

    def run(self):
        self.timestamp = int(time.time())
        self.update_cache_url = "/update-cache/c/s/{}?amp_action=flush&amp_ts={}".format(self.amp_url, self.timestamp)

        self.calculate_signature()
        self.send_request()

    def calculate_signature(self):
        key_file = open(self.private_key_path, "r")
        key = key_file.read()
        key_file.close()

        pkey = crypto.load_privatekey(crypto.FILETYPE_PEM, key)
        sign = OpenSSL.crypto.sign(pkey, self.update_cache_url, "sha256")

        self.signature = base64.b64encode(sign, altchars=b'-_').decode("utf-8")

    def send_request(self):
        domain = self.amp_url.partition('/')[0]
        prefix = domain.replace('.', '-')
        url = "https://{}.cache.{}{}&amp_url_signature={}".format(prefix, CACHE_DOMAIN, self.update_cache_url, self.signature)
        r = requests.get(url, verify=False)
        if r.status_code == 200:
            print("Successfully updated cached AMP content at {}".format(self.amp_url))
        else:
            print("Cache update failed. Response code: {}".format(r.status_code))
            print(r.content)


# https://gist.github.com/iamatypeofwalrus/5637895
class TabCompleter(object):

    def path_completer(self,text,state):
        """ 
        This is the tab completer for systems paths.
        Only tested on *nix systems
        """
        line   = readline.get_line_buffer().split()

        return [x for x in glob.glob(text+'*')][state]


if __name__=="__main__":
    tabCompleter = TabCompleter()
    cacheUpdate = CacheUpdate()

    cacheUpdate.amp_url = input("Amp url (e.g. www.mysite.com/my-article/): ")

    readline.set_completer_delims('\t')
    readline.parse_and_bind("tab: complete")
    readline.set_completer(tabCompleter.path_completer)
    cacheUpdate.private_key_path = input("Private key path: ")

    cacheUpdate.run()
