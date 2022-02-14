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
namespace api
{
    public class FilmeServico : IFilmeServico
    {
      private readonly HttpClient _httpClient;
      public FilmeServico(HttpClient HttpClient)
      {
        this._httpClient = HttpClient;
      }
      public Task<IEnumerable<Filme>> getFilmes()
      {
        var response = await _httpClient.GetAsync("http://localhost:3001");
        response.EnsureSuccessStatusCode();
        using var responseStream = await response.Content.ReadAsStreamAsync();
        var responseObject = await JsonSerializer.DeserializeAsync<getFilmeResult>(responseStream);
        return responseObject;
      }
    }
}