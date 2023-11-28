package agenda;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.Duration;
import java.util.UUID;

public class Cita implements Serializable, Comparable<Cita> {
    
    public static final long serialVersionUID=123344125L;
    
    private LocalDateTime fechaYHoraInicio;
    private Duration duracion;
    private String nombrePaciente;
    private LocalDateTime fechaYHoraFinalizacion;
    private UUID uuid;
    
    public Cita(String nombrePaciente, 
                LocalDateTime fechaYHora,
                Duration duracion)
    {
        this.nombrePaciente=nombrePaciente;
        this.fechaYHoraInicio=fechaYHora;
        this.duracion=duracion; 
        this.fechaYHoraFinalizacion=fechaYHoraInicio.plus(duracion);
        uuid=UUID.randomUUID();
    }
        
    public LocalDateTime getFechaYHoraInicio() {
        return fechaYHoraInicio;
    }

    public LocalDateTime getFechaYHoraFinalizacion()
    {
        return fechaYHoraFinalizacion;
    }
    
    public Duration getDuracion() {
        return duracion;
    }

    public String getNombrePaciente() {
        return nombrePaciente;
    }
    
    public UUID getUUID()
    {
        return uuid;
    }
    
    @Override
    public String toString()
    {
        return String.format("%s @%s - %s [%d min]",
                nombrePaciente,
                fechaYHoraInicio.format(Agenda.formatoFecha),
                getFechaYHoraFinalizacion().format(Agenda.formatoFecha),
                duracion.toMinutes());
    }

    @Override
    public int compareTo(Cita o) {           
       LocalDateTime f2=o.fechaYHoraInicio;       
       return fechaYHoraInicio.compareTo(f2);       
    }
    
    public boolean enIntervalo (LocalDateTime fechaYHora)
    {
        return !(fechaYHora.isBefore(fechaYHoraInicio) ||
               fechaYHora.isAfter(getFechaYHoraFinalizacion()));
    }
}
