using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Collections.Generic;
using System.Text.Json;


namespace WebAPIClient
{
      public class Repository
    {
        public string name { get; set; }
    }
    class Program
    {
        private static readonly HttpClient client = new HttpClient();

        static async Task Main(string[] args)
        {
            //...
        }
    }
}
namespace dotnetAPI
{
    public class Program
    {
      static async Task Main(string[] args)
      {
          await ProcessRepositories();
      }
      private static async Task ProcessRepositories()
      {
  // var streamTask = client.GetStreamAsync("https://api.github.com/orgs/dotnet/repos");
  // var repositories = await JsonSerializer.DeserializeAsync<List<Repository>>(await streamTask);
    }
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}