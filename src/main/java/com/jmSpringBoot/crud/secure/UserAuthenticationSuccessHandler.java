package com.jmSpringBoot.crud.secure;

import com.jmSpringBoot.crud.model.User;
import org.hibernate.Hibernate;
import org.hibernate.jpa.HibernateQuery;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Principal;
import java.sql.SQLInput;
import java.util.Set;

@Component
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException {
        Set<String> roles = AuthorityUtils.authorityListToSet(authentication.getAuthorities());
        if (roles.contains("ADMIN")) {
            httpServletResponse.sendRedirect("/admin");
        } else {
//            httpServletResponse.sendRedirect("/user");
//            httpServletResponse.sendRedirect("/rest/getPrincipal");
            httpServletResponse.sendRedirect("/user/user");
        }
    }
}

