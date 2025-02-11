
from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

agendamentos_lista = []

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        emailLogin = request.form.get("emailLogin")
        senhaLogin = request.form.get("senhaLogin")
        return redirect(url_for("index2", emailLogin=emailLogin, senhaLogin=senhaLogin))
    return render_template("login.html")

@app.route("/index2")
def index2():
    emailLogin = request.args.get("emailLogin")
    senhaLogin = request.args.get("senhaLogin")
    return render_template("index2.html", emailLogin=emailLogin, senhaLogin=senhaLogin)

@app.route("/cadastro", methods=["GET", "POST"])
def cadastro():
    if request.method == "POST":
        emailCadastro = request.form.get("emailLogin")
        telefoneCadastro = request.form.get("senhaLogin")
        senhaCadastro = request.form.get("senhaCadastro")
        confirmarsenha = request.form.get("confirmarsenha")
        return redirect(url_for("index", emailCadastro=emailCadastro,telefoneCadastro=telefoneCadastro, senhaCadastro=senhaCadastro, confirmarsenha=confirmarsenha))
    return render_template("cadastro.html")

@app.route("/agendamentos", methods=["GET", "POST"])
def agendamentos():
    if request.method == "POST":
        nome = request.form.get("nome")
        email = request.form.get("email")
        telefone = request.form.get("telefone")
        consulta = request.form.get("consulta")
        paramim = request.form.get("paramim")
        paraoutra = request.form.get("outrapessoa")

        novo_agendamento = {
            "nome": nome,
            "email": email,
            "telefone": telefone,
            "consulta": consulta,
            "paramim": paramim,
            "paraoutra": paraoutra
        }

        agendamentos_lista.append(novo_agendamento)

        return redirect(url_for("minhasconsultas"))

    return render_template("agendamentos.html")   

@app.route("/minhasconsultas")
def minhasconsultas():
    return render_template("minhasconsultas.html", agendamentos=agendamentos_lista)


if __name__ == "__main__":  
    app.run(debug=True)
