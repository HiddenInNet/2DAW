package agenda;



import java.io.Serializable;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.UUID;

public class Agenda implements Serializable {
    public final static String formatoFechaStr="d-M-y H:m";
    public final static DateTimeFormatter formatoFecha=DateTimeFormatter.ofPattern(formatoFechaStr);
    private List<Cita> citas;
    public static final long serialVersionUID=123344125L;

    
    public Agenda ()
    {
        citas=new ArrayList<>(); 
    }
    
    public boolean insertarCita(Cita c) {
        boolean ret = citas.add(c);
        Collections.sort(citas);
        return ret;
    }       
    
    public boolean coincideConOtra (Cita nuevaCita)
    {
        boolean coincide=false;
        for (Cita cita:citas)
        {
            coincide=cita.enIntervalo(nuevaCita.getFechaYHoraInicio()) ||
                    cita.enIntervalo(nuevaCita.getFechaYHoraFinalizacion()) ||
                    nuevaCita.enIntervalo(cita.getFechaYHoraInicio()) ||
                    nuevaCita.enIntervalo(cita.getFechaYHoraFinalizacion());
            if (coincide) break;
        }
        return coincide;
    }
    
    public Cita eliminarCita (String uuidstr)
    {
        try {
            UUID luuid=UUID.fromString(uuidstr);            
            return eliminarCita(luuid);
        }
        catch (Exception e)
        {
            return null;
        }                
    }
    
    public Cita eliminarCita (UUID uuid)
    {
        Cita ret=null;
        try {
            Iterator<Cita> itc=citas.listIterator();
            while (itc.hasNext())
            {
                Cita tmpcita=itc.next();
                if (tmpcita.getUUID().equals(uuid))
                {
                    itc.remove();
                    ret=tmpcita;
                    break;
                }
            }
            
        }   
        catch (Exception e)
        {
            ret=null;
        }
        return ret;
    }
    
    public List<Cita> getListaCitas()
    {
        return citas;
    }
    
    @Override
    public String toString()
    {
        StringBuilder sb=new StringBuilder();
        
        for (int i=0;i<citas.size();i++)
        {
            Cita c=citas.get(i);            
            sb.append(i).append(": ").append(c.toString()).append("\n");            
        }
                
        return sb.toString();
    }
    
}
