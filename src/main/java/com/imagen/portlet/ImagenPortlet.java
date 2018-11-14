package com.imagen.portlet;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;
import javax.portlet.Portlet;
import org.osgi.service.component.annotations.Component;
  
@Component(immediate = true, property = {
	    "com.liferay.portlet.display-category=categoria.imagen",
	    "com.liferay.portlet.instanceable=true",
            "javax.portlet.display-name=Modulo OSGI. Imagen-WEB Portlet",
	    "javax.portlet.init-param.template-path=/", 
	    "com.liferay.portlet.footer-portlet-javascript=https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js",
	    "com.liferay.portlet.footer-portlet-javascript=/js/angular-portlet.js", 
	    "com.liferay.portlet.footer-portlet-javascript=/js/imagen-controller.js",
	    "com.liferay.portlet.header-portlet-css=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
	    "com.liferay.portlet.footer-portlet-javascript=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
	    "com.liferay.portlet.header-portlet-css=/css/estilo.css",
	    "javax.portlet.init-param.view-template=/imagen.jsp",
	    "javax.portlet.resource-bundle=content.Language",
	    "javax.portlet.security-role-ref=power-user,user" 
	}, service = Portlet.class)
public class ImagenPortlet extends MVCPortlet {}
