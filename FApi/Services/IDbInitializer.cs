using FApi.Data;
using System.Threading.Tasks;

namespace FApi.Services
{
    public interface IDbInitializer
    {
        Task Initialize(ApplicationDbContext context);
    }
}
