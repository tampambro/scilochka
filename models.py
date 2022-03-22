import app

from datetime import datetime, timezone
from dataclasses import dataclass

@dataclass
class Scilochka(app.db.Model):

  id: int
  title: str
  content: str
  date: datetime

  __tablename__ = 'scilochki'
  id = app.db.Column(app.db.Integer, primary_key=True)
  title = app.db.Column(app.db.String(200))
  content = app.db.Column(app.db.String(5000))
  date = app.db.Column(app.db.DateTime(), default=datetime.now(timezone.utc))

  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)

  def __repr__(self):
    return f'<Task id: {self.id} - {self.title}>'