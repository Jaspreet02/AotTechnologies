using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AotTechnogolies.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet("[action]/{query}/{message}")]
        public IActionResult GetCount(string query,string message)
        {
            var count = 0;var reverse = 0; var palindrome = 0;
            if ((query != null && query.Trim().Length > 0) && (message != null && message.Trim().Length > 0))
            {
                var reverseString = Reverse(Regex.Replace(query, @"\s+", ""));
                string[] messageList = message.Split(' ').ToArray();
                reverse = messageList.Count(x=> x.Equals(reverseString));
                count = Regex.Matches(string.Join(Environment.NewLine, messageList).Replace("\r","").Replace("\n",""), Regex.Replace(query, @"\s+", "")).Count;
            }
            if (message != null && message.Trim().Length > 0)
            {
                string[] messageList = message.Split(' ').ToArray();
                for (int i = 0; i < messageList.Length; i++)
                {
                    if (messageList[i] == Reverse(messageList[i]))
                    {
                        palindrome++;
                    }
                }
            }
                var result = new { count = count, reverseCount = reverse, palindromeCount = palindrome };
            return Ok(result);
        }

        public static string Reverse(string s)
        {
            char[] charArray = s.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }
    }
}
