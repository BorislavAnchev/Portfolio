using System;

namespace ChatAPI.Models
{
    public class Message
    {
        public int MessageId { get; set; }
        public string Sender { get; set; }
        public string Content { get; set; }
        public DateTime TimeLog { get; set; }
    }
}
