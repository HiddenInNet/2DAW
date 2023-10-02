package TestFactory;

public class FacturaIvaReducido extends Factura{

    @Override
    public double getImporteIva() {
        return super.getImporte()*1.10;
    }
}
