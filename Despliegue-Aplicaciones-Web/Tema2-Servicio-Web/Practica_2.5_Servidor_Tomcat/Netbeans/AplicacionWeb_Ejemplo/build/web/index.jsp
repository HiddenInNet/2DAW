
<%@page import="java.nio.charset.Charset"%>
<%@page import="java.time.Duration"%>
<%@page import="java.util.LinkedList"%>
<%@page import="java.util.List"%>
<%@page import="java.time.format.DateTimeParseException"%>
<%@page import="java.time.LocalDateTime"%>
<%@page import="agenda.*"%>
<%--@page contentType="text/html" pageEncoding="UTF-8"--%>
<%@page contentType="text/html; charset=UTF-8" %>

<%  Agenda agenda; %>
<%  List<String> errores=new LinkedList<String>(); %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Gestión de citas.</title>
    </head>
    <body>
        <H1>Gestión de citas v0.1</H1>
        <P>Nota: Las citas se almacenarán en una sesión temporal, al reiniciar el servidor, cambiar de navegador o borrar las cookies la sesión se perderá.</P>
        <form method="POST">
            <Label>Fecha y Hora: <input type="datetime" name="fechayhora"> (Formato: <%=LocalDateTime.now().format(Agenda.formatoFecha)%>)</label><br>
            <Label>Duración: <input type="number" alt="tiempo en minutos" name="duracion"> </label> (en minutos) <br>
            <Label>Persona: <input type="text" alt="Persona" name="persona"> </label><br>
            <input type="submit" name="crear" value="Crear">            
        </form>
        <% 
            /* Creación de datos de sesión */
            agenda=(Agenda)session.getAttribute("agenda");
            if (agenda==null)
            {
                //Creamos un nuevo objeto Agenda para esta sesión
                agenda=new Agenda();
            }
            
            /* Recopilación de parámetros */
            request.setCharacterEncoding("utf-8");
            String fechaYHoraParam=request.getParameter("fechayhora");
            String duracionParam=request.getParameter("duracion");
            Charset m=Charset.forName("utf-8");
            String personaParam=request.getParameter("persona");            
            String crearParam=request.getParameter("crear");   
            String eliminarParam=request.getParameter("eliminar");
            String uuidParam=request.getParameter("uuid");
            
            if (fechaYHoraParam!=null && duracionParam!=null && personaParam!=null 
                    && crearParam!=null)
            {           
        %>                
        
        <%                
                LocalDateTime fechaYHora=null;
                try {
                    fechaYHora=LocalDateTime.parse(fechaYHoraParam,Agenda.formatoFecha);                    
                }
                catch(DateTimeParseException dtpe)
                {                    
                    errores.add("No se ha podido procesar la fecha y la hora (DD-MM-AAAA HH:SS)");
                }
                Duration duracion=null;
                try {
                    duracion=Duration.ofMinutes(Integer.parseInt(duracionParam));
                }
                catch(NumberFormatException nfe)
                {                    
                    errores.add("El número de minutos indicados no tiene el formato esperado.");
                }
                String persona="";
                if (!personaParam.matches("[\\pL\\s&&[^\\d]]{2,}"))
                {
                    errores.add("El nombre no coincide con el formato esperado:"+personaParam);
                }
                else 
                    persona=personaParam;
            
                if (errores.size()==0 && persona!=null && fechaYHora!=null && duracion!=null)
                {
                    Cita c=new Cita(persona,fechaYHora,duracion);
                    if (agenda.coincideConOtra(c))
                    {                        
                        errores.add("La cita coincide con otra cita ya existente.");
                    }
                    else {
                        agenda.insertarCita(c);
                        %>                        
                        <H3>Cita insertada: <%=c%></h3>
                        <p><small>(Ahora hay <%=agenda.getListaCitas().size()%> citas en la agenda.)</small></p>
                        <%
                    }
                }
                else
                {
                    errores.add("La cita no se ha registrado.");
                }
            }       
            if (eliminarParam!=null && uuidParam!=null)
            {
                Cita e;
                if ((e=agenda.eliminarCita(uuidParam))!=null) { %>
                    <H3>Cita <small><%=e%></small> eliminada.</H3>
                        <%
                        } else  { 
                            errores.add("Cita "+uuidParam+" no existe, y no se pudo eliminar.");                        
                        }
            }

            session.setAttribute("agenda", agenda);
        %>
        <% if (errores.size()>0) { %>
            <H3>Errores en la acción:</H3>
            <UL>
                <% for (String error:errores) { %>
                    <li><%=error%></li>                  
                <% } %>
            </UL>
        <% } %>
        <% List<Cita> citas=agenda.getListaCitas();
           if (citas.size()>0) {
        %>
        <H1>Lista actual de citas</H1>
        <UL>
        <% for (Cita c : citas) {%>
            <li>
                <form><%=c%>
                    <input type="submit" name="eliminar" value="Eliminar">
                    <input type="hidden" name="uuid" value="<%=c.getUUID().toString()%>">
                </form>
            </li>                   
        <% } %>
        </UL>           
        <br>
        <A href="ExportarLista">Obten la lista exportada en CSV (para Excel)</A>
        <% } else { %>
        <H1>Sin citas...</H1><P><small>pruebe a insertar alguna</small></P>
        <% } %>
    </body>
</html>
