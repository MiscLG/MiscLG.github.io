#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import jinja2
import os
import webapp2
from google.appengine.api import users
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers
from models import *

jinja=jinja2.Environment(loader=jinja2.FileSystemLoader('pageFiles'))


class MainHandler(webapp2.RequestHandler):
    def get(self):
        page = jinja.get_template('index.html')
        user = users.get_current_user()
        #note to self: figure out how to modularize login authentication... prob function
        logout_url= users.create_logout_url('/')
        login_url= users.create_login_url('/')
        var={}
        if user:
            email=users.get_current_user().email()
            try:
                User.query(User.email==email).fetch()
            except:
                user= User(
                    name=users.get_current_user().nickname(),
                    email=users.get_current_user().email()
                    )
                user.put()     
            var['login_status'] = ('<a href="%s" id="login">Sign out</a>' % logout_url)
            
        else:
            var['login_status'] = ('<a href="%s" id="login">Sign in</a>' % login_url)
        self.response.write(page.render(var))
class ContactHandler(webapp2.RequestHandler):
    def get(self):
        contact = jinja.get_template('contact.html')
        self.response.write(contact.render())
        
class ArtHandler(webapp2.RequestHandler):
    def get(self):
        art = jinja.get_template('art.html')
        self.response.write(art.render())
        
class ProgrammingHandler(webapp2.RequestHandler):
    def get(self):
        programming = jinja.get_template('programming.html')
        self.response.write(programming.render())
        
class ProfessionalHandler(webapp2.RequestHandler):
    def get(self):
        professional = jinja.get_template('professional.html')
        self.response.write(professional.render())

class PhotoUploadFormHandler(webapp2.RequestHandler):
    def get(self):
        upload_url = blobstore.create_upload_url('/upload_photo')
        # To upload files to the blobstore, the request method must be "POST"
        # and enctype must be set to "multipart/form-data".
        # NOTE TO SELF: figure out how to do this from a modular html form like nav
        self.response.out.write("""
<html><body>
<form action="{0}" method="POST" enctype="multipart/form-data">
  Upload File: <input type="file" name="file"><br>
  <input type="submit" name="submit" value="Submit">
</form>
</body></html>""".format(upload_url))


class PhotoUploadHandler(blobstore_handlers.BlobstoreUploadHandler):
    def post(self):
        upload = self.get_uploads()[0]
        user_photo = Photo(
            user=users.get_current_user().user_id(),
            blob_key=upload.key())
        user_photo.put()

        self.redirect('/view_photo/%s' % upload.key())


class ViewPhotoHandler(blobstore_handlers.BlobstoreDownloadHandler):
    def get(self, photo_key):
        if not blobstore.get(photo_key):
            self.error(404)
        else:
            self.send_blob(photo_key)



app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/contact',ContactHandler),
    ('/art', ArtHandler),
    ('/programming',ProgrammingHandler),
    ('/professional', ProfessionalHandler),
    ('/upload_form', PhotoUploadFormHandler),
    ('/upload_photo', PhotoUploadHandler),
    ('/view_photo/([^/]+)?', ViewPhotoHandler),
], debug=True)
