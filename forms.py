from wtforms import Form, StringField, validators
# from wtforms.validators import DataRequired

class ScilochkaForm(Form):
  title = StringField('title', [validators.Length(min=1, max=200)])
  content = StringField('content', [validators.Length(min=0, max=5000)])