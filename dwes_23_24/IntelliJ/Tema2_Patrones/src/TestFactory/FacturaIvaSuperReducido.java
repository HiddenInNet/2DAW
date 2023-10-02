package TestFactory;

public class FacturaIvaSuperReducido extends Factura{

    @Override
    public double getImporteIva() {
        return super.getImporte()*1.04;
    }
}
