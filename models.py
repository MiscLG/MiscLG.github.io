from google.appengine.ext import ndb
from google.appengine.ext import blobstore

class Photo(ndb.Model):
    user = ndb.StringProperty()
    category = ndb.StringProperty()
    name = ndb.StringProperty()
    blob_key = ndb.BlobKeyProperty()
    
class User(ndb.Model):
    name = ndb.StringProperty()
    email = ndb.StringProperty()

