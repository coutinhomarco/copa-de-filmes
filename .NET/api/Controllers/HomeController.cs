using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
namespace api.Controllers
{
    public class HomeController : Controller
    {
      private readonly IFilmeServico _filmeServico;
      // private readonly IControlers _configuration;

      public HomeController(IFilmeServico filmeServico)
      {
        _IFileServico = fileServico;
        _configuration = configuration;
      }
      public async Task<IActionResult> Index()
      {
        try
        {
          var filmes = await _filmeServico.getFilmes();
        }
        catch (System.Exception)
        {
          
          throw;
        }
      }
    }
}