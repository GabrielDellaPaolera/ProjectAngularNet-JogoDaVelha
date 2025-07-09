namespace backend.Models
{
    public class Resultado
    {
        public int Id { get; set; }
        public string Vencedor { get; set; } = string.Empty; // "X", "O" ou "E"
        public DateTime DataHora { get; set; }
    }
}
