package com.example.demo01;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class Controller {
    @RequestMapping("")
    public ModelAndView indexView() {
        ModelAndView mav = new ModelAndView("/views/index.html");
        return mav;
    }
    @RequestMapping("/bar") // 条形图
    public ModelAndView showBarView() {
        ModelAndView mav = new ModelAndView("/views/bar.html");
        return mav;
    }
    @RequestMapping("/radar") // 条形图
    public ModelAndView showRadarView() {
        ModelAndView mav = new ModelAndView("/views/radar.html");
        return mav;
    }
    @RequestMapping("/sunfigure") // 旭日图
    public ModelAndView showSunfigureView() {
        ModelAndView mav = new ModelAndView("/views/sunfigure.html");
        return mav;
    }
    @RequestMapping("/pictogram") // 象形图 
    public ModelAndView showPictogramView() {
        ModelAndView mav = new ModelAndView("/views/pictogram.html");
        return mav;
    }
    @RequestMapping("/scatterplot") // 散点图
    public ModelAndView showScatterplotView() {
        ModelAndView mav = new ModelAndView("/views/scatterplot.html");
        return mav;
    }
}
