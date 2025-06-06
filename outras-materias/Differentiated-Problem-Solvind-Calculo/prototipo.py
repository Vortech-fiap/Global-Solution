import tkinter as tk
from tkinter import messagebox
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import numpy as np

dias = np.arange(0, 11)
niveis_relativos = [0.318, 0.628, 0.658, 0.725, 0.624, 0.708, 0.611, 0.779, 0.657, 0.250, 0.0]

limite_relativo = 0.579

janela = tk.Tk()
janela.title("Monitoramento do Rio Tiete")

fig, ax = plt.subplots(figsize=(6, 4))

canvas = FigureCanvasTkAgg(fig, master=janela)
canvas.get_tk_widget().pack()

def atualizar_grafico(nivel_dia12=None):
    ax.clear()
    dias_plot = list(dias)
    niveis_plot = list(niveis_relativos)
    
    if nivel_dia12 is not None:
        dias_plot.append(11)  
        niveis_plot.append(nivel_dia12)
        
    ax.plot(dias_plot, niveis_plot, marker='o', label="Nivel Relativo (m)")
    ax.axhline(y=limite_relativo, color='red', linestyle='--', label="Limite de transbordamento (0.579 m)")
    ax.set_title("Nivel Relativo do Rio Tiete (30/01 a 10/02)")
    ax.set_xlabel("Dias desde 30/01")
    ax.set_ylabel("Nivel Relativo (m)")
    ax.set_xticks(range(len(dias_plot)))
    ax.grid(True)
    ax.legend()
    canvas.draw_idle()

atualizar_grafico()

label_input = tk.Label(janela, text="Digite o nivel relativo para o dia 12 (10/02), entre 0 e 0.779:")
label_input.pack(pady=5)

entry_nivel = tk.Entry(janela)
entry_nivel.pack()

def verificar_nivel():
    valor_texto = entry_nivel.get()
    try:
        valor = float(valor_texto.replace(',', '.'))
    except ValueError:
        messagebox.showerror("Erro", "Por favor, insira um numero valido.")
        return
    
    if valor < 0 or valor > 0.779:
        messagebox.showerror("Erro", "O valor deve estar entre 0 e 0.779, inclusive.")
        return
    
    atualizar_grafico(nivel_dia12=valor)
    
    if valor > limite_relativo:
        messagebox.showwarning("Risco de Enchente", "No dia 10/02 ha risco de enchente!")
    else:
        messagebox.showinfo("Sem risco", "No dia 10/02 nao ha risco de enchente.")

botao = tk.Button(janela, text="Verificar nivel dia 12", command=verificar_nivel, bg='#007acc', fg='white', font=('Arial', 12, 'bold'))
botao.pack(pady=10)

janela.mainloop()
