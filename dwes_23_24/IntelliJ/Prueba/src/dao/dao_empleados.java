package dao;

import db.ConexionBD;
import models.Employees;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class dao_empleados {

    public static List<Employees> getEmpleados() {

        Connection con = ConexionBD.getConnection();

        ArrayList<Employees> listaEmpleados = new ArrayList<Employees>();

        try {
            Statement statement = con.createStatement();

            ResultSet resultSet = statement.executeQuery("SELECT * FROM employees WHERE firstName='Diane';");

            while (resultSet.next()) {
                Employees employee = new Employees(

                        resultSet.getInt(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getInt(7),
                        resultSet.getString(8)
                );

                listaEmpleados.add(employee);
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }

        ConexionBD.close();

        return listaEmpleados;
    }
}
