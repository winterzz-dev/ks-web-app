﻿namespace WebApplication1.Models
{
    /// <summary>
    ///  Структура данных пользователя
    /// </summary>
    public class UserDescription
    {
        public int id { get; set; }

        public string name { get; set; }

        public string username { get; set; }

        public string email { get; set; }
        public string city { get; set; }

        public string street { get; set; }

        public string suite { get; set; }

        public bool blocked { get; set; }
    }
}
