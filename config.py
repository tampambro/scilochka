from pathlib import Path

BASE_DIR = Path(__file__).parent

class Config:
  SQLALCHEMY_DATABASE_URI = 'sqlite:///' + str(BASE_DIR.joinpath('db.sqlite'))
  SQLALCHEMY_TRACK_MODIFICATIONS = False

  # no forms so no concept of flashing
  SECURITY_FLASH_MESSAGES = False

  SECURITY_URL_PREFIX = '/api'

  # Turn on all the great Flask-Security features
  SECURITY_RECOVERABLE = True
  SECURITY_TRACKABLE = True
  SECURITY_CHANGEABLE = True
  SECURITY_CONFIRMABLE = True
  SECURITY_REGISTERABLE = True
  SECURITY_UNIFIED_SIGNIN = True

  # Send Cookie with csrf-token. This is the default for Axios and Angular.
  SECURITY_CSRF_COOKIE_NAME = "XSRF-TOKEN"
  WTF_CSRF_CHECK_DEFAULT = False
  WTF_CSRF_TIME_LIMIT = None