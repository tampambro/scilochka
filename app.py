from flask import Flask, render_template, jsonify, request
from flask_sqlalchemy import SQLAlchemy

from dotenv import load_dotenv
from datetime import datetime, timezone

from config import Config

load_dotenv('./.flaskenv')

app = Flask(__name__, static_folder='static', static_url_path="/static")
app.config.from_object(Config)

db = SQLAlchemy(app)

import models
from forms import ScilochkaForm

@app.route('/api/scilochka/<int:id>', methods=['GET'])
def get_scilochka(id):
  scilochka = models.Scilochka.query.get_or_404(id)
  return jsonify(scilochka)

@app.route('/api/create_scilochky', methods=['POST'])
def create_scilochky():
  user_input = request.get_json()
  form = ScilochkaForm(data=user_input)

  if form.validate():
    scilochka = models.Scilochka(title=form.title.data, content=form.content.data, date=datetime.now(timezone.utc))

    db.session.add(scilochka)
    db.session.flush()

    new_id = scilochka.id

    db.session.commit()

    return jsonify({'success': 'true', 'scilochka_id': new_id})
  else:
    return jsonify({'success': 'false', 'reason': 'form is not valid'})

@app.route('/api/archive', methods=['GET'])
def getArchive():
  archive = models.Scilochka.query.all()
  return jsonify(archive)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
  return render_template('index.html')

if __name__ == '__main__':
  app.run()