using System;

namespace FApi.Data.Entities.CRM
{
    public class Pessoa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public DateTime DataNascimento { get; set; }

        public string DataNascimentoFormatada => DataNascimento.ToString("dd/MM/yyyy");

        public string Sexo { get; set; }

        public string NomeCompleto => $"{Nome} {Sobrenome}";

        public DateTime DataCriacao { get; set; }
    }
}
