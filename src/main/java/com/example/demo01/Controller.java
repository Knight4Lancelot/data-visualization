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
    @RequestMapping("/bar") // ����ͼ
    public ModelAndView showBarView() {
        ModelAndView mav = new ModelAndView("/views/bar.html");
        return mav;
    }
    @RequestMapping("/radar") // ����ͼ
    public ModelAndView showRadarView() {
        ModelAndView mav = new ModelAndView("/views/radar.html");
        return mav;
    }
    @RequestMapping("/sunfigure") // ����ͼ
    public ModelAndView showSunfigureView() {
        ModelAndView mav = new ModelAndView("/views/sunfigure.html");
        return mav;
    }
    @RequestMapping("/pictogram") // ����ͼ 
    public ModelAndView showPictogramView() {
        ModelAndView mav = new ModelAndView("/views/pictogram.html");
        return mav;
    }
    @RequestMapping("/scatterplot") // ɢ��ͼ
    public ModelAndView showScatterplotView() {
        ModelAndView mav = new ModelAndView("/views/scatterplot.html");
        return mav;
    }
}
