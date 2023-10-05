package main;

import misc.Misc;
import org.apache.log4j.Logger;

public class Main {

    final static Logger logger = Logger.getLogger(Main.class);
    public static void main(String[] args) {

        logger.info("Antes de invocar a sumar");
        int resultado = Misc.sumar(3,6);

        logger.info("Antes de invocar a restar");
        resultado = Misc.restar(resultado,2);

        logger.info("Despues de realizar todo");

    }
}
