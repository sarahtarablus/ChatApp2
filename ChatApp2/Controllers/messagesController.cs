using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace ChatApp2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class messagesController : ControllerBase
    {
        public string[] messages = new string[3] { "Hello", "How are you?", "what are you up to?" };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(messages);
        }


        [HttpPost]
        public IActionResult Post(JObject payload)
        {
            return Ok(payload);
        }
   
    }
}
