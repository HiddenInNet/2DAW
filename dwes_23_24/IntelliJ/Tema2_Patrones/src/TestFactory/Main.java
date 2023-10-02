package TestFactory;

public class Main {

    public static void main(String [] args){

        Factura factura = FactoriaFacturas.getFactura("superreducido");

        factura.setId(1);

        factura.setImporte(1000);

        System.out.println("El importe con IVA es: "+factura.getImporteIva());

    }
}
