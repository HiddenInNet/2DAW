package misc;

import org.apache.log4j.Logger;

public class Misc {

    final static Logger logger = Logger.getLogger(Misc.class);

    public static int sumar(int op1, int op2){
        logger.info("Iniciando sumar");
        int result = op1 + op2;
        logger.error("Error al sumar");
        return result;
    }

    public static int restar(int op1, int op2){
        logger.info("Iniciando restar");
        int result = op1 + op2;
        logger.info("Operacion restar realizada correctamente");
        return result;
    }

}
