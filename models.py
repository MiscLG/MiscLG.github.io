from google.appengine.ext import ndb
from google.appengine.ext import blobstore

class Photo(ndb.Model):
    user = ndb.StringProperty()
    category = ndb.StringProperty()
    name = ndb.StringProperty()
    blob_key = ndb.BlobKeyProperty()
class Drawing(ndb.Model):
    category = ndb.StringProperty()
    name = ndb.StringProperty()
    blob_key = ndb.BlobKeyProperty()
    likes = ndb.IntegerProperty()
    comments = ndb.IntegerProperty()
    
class User(ndb.Model):
    name = ndb.StringProperty()
    email = ndb.StringProperty()
class ArtComment(ndb.Model):
    user = ndb.StringProperty()
    connect_blob_key = ndb.BlobKeyProperty()
    
    
    
