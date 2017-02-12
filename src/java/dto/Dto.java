/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;
import com.mongodb.client.model.Sorts;
import dao.Conexion;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.bson.Document;

/**
 *
 * @author Lenovo
 */
public class Dto {

    private Conexion c = new Conexion();

    public long getLastStudentId() {
        Conexion c = new Conexion();
        MongoCollection<Document> col = c.getConnection("usuarioxactividad");

        Document doc = col.find().sort(Sorts.orderBy(Sorts.descending("_id"))).first();

        if (doc == null) {
            return 0;
        } else {
            return (doc.getLong("_id"));
        }
    }

    public long getLastTeacherId() {
        Conexion c = new Conexion();
        MongoCollection<Document> col = c.getConnection("profesores");

        Document doc = col.find().sort(Sorts.orderBy(Sorts.descending("_id"))).first();

        if (doc == null) {
            return 0;
        } else {
            return (doc.getLong("_id"));
        }
    }

    public long getLastTesisId() {
        Conexion c = new Conexion();
        MongoCollection<Document> col = c.getConnection("universo_tesis");

        Document doc = col.find().sort(Sorts.orderBy(Sorts.descending("_id"))).first();

        if (doc == null) {
            return 0;
        } else {
            return (doc.getLong("_id"));
        }
    }

    public void registrarTema(String tema, String usuario) {
        c = new Conexion();
        MongoCollection<Document> col = c.getConnection("universo_tesis");
        //int idUsuario = 0;
        Document doc = new Document();
        doc.append("_id", (getLastTesisId() + 1));
        doc.append("titulo", tema);
        doc.append("usuario", usuario);
        doc.append("estado", "PENDIENTE DE CONFIRMACIÓN");
        DateFormat dateFormat = new SimpleDateFormat("yyyy");
        Date date = new Date();
        doc.append("año", String.valueOf(dateFormat.format(date)));
        col.insertOne(doc);
    }

    public boolean existe(String user, String psw) {
        Conexion c = new Conexion();
        MongoCollection<Document> col = c.getConnection("usuarioxactividad");
        long count = col.count(and(eq("usuario", user), eq("contraseña", psw)));
        System.out.println(c);
        if (count == 1) {
            return true;
        } else {
            return false;
        }
    }

    public void registrarStudent(String nombre, String usuario, String psw) {
        c = new Conexion();
        MongoCollection<Document> col = c.getConnection("alumnos");
        //int idUsuario = 0;
        Document doc = new Document();
        doc.append("_id", (getLastStudentId() + 1));
        doc.append("nombre", nombre);
        doc.append("usuario", usuario);
        doc.append("psw", psw);
        col.insertOne(doc);
    }

    public void registrarTeacher(String nombre, String usuario, String psw) {
        c = new Conexion();
        MongoCollection<Document> col = c.getConnection("profesores");
        //int idUsuario = 0;
        Document doc = new Document();
        doc.append("_id", (getLastTeacherId() + 1));
        doc.append("nombre", nombre);
        doc.append("usuario", usuario);
        doc.append("psw", psw);
        col.insertOne(doc);
    }

    public String loginStudent(String u, String p) {
        String id;
        MongoCollection<Document> col = c.getConnection("alumnos");
        try {
            Document doc = col.find(eq("usuario", u)).first();
            if (u.equalsIgnoreCase(doc.getString("usuario")) && p.equalsIgnoreCase(doc.getString("psw"))) {
                id = doc.getString("nombre");
            } else {
                id = "error";
            }
        } catch (NullPointerException e) {
            id = "error";
        }
        return id;
    }

    public String loginTeacher(String u, String p) {
        String id;
        MongoCollection<Document> col = c.getConnection("profesores");
        try {
            Document doc = col.find(eq("usuario", u)).first();
            if (u.equals(doc.getString("usuario")) && p.equals(doc.getString("psw"))) {
                id = doc.getString("nombre");
            } else {
                id = "error";
            }
        } catch (NullPointerException e) {
            id = "error";
        }
        return id;
    }

    public String listarTesis() {
        String cadena = "";
        MongoCollection<Document> col = c.getConnection("universo_tesis");
        MongoCursor<Document> cursor = col.find().sort(Sorts.orderBy(Sorts.descending("año"))).iterator();
        Document doc;
        try {
            while (cursor.hasNext()) {
                doc = cursor.next();
                cadena += "<tr>"
                        + "<td width='20%'>" + doc.getString("titulo").toUpperCase().trim() + "</td>"
                        + "<td width='20%'>" + doc.getString("año") + "</td>"
                        + "<td width='20%'>" + doc.getString("estado").toUpperCase().trim() + "</td>"
                        + "</tr>";
            }
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            cursor.close();
        }
        return cadena;
    }

    public String getAlumno(int id) {
        String a = "";
        MongoCollection<Document> col = c.getConnection("alumnos");
        try {
            Document doc = col.find(eq("_id", id)).first();
            a = doc.getString("nombre");
        } catch (NullPointerException e) {
            a = "error";
        }
        return a;
    }

    public String getAsesor(int id) {
        String p = "";
        MongoCollection<Document> col = c.getConnection("profesores");
        try {
            Document doc = col.find(eq("_id", id)).first();
            p = doc.getString("nombre");
        } catch (NullPointerException e) {
            p = "error";
        }
        return p;
    }
}
