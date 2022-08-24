package com.example.demo01;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class Controller {
    @RequestMapping("/index")
    public String hello() {
        return "hello world!";
    }
    @RequestMapping("/task")
    public ModelAndView itemsList() {
        ModelAndView mav = new ModelAndView("/views/index.html");
        return mav;
    }
}
