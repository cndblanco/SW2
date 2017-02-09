/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import com.mongodb.client.MongoCollection;
import static com.mongodb.client.model.Filters.eq;
import dao.Conexion;
import org.bson.Document;

/**
 *
 * @author Lenovo
 */
public class Dto {
    private Conexion c=new Conexion();
    public void registrar(String nombre, String usuario, String psw) {
        c = new Conexion();
        MongoCollection<Document> col = c.getConnection("usuarios");
        //int idUsuario = 0;
        Document doc = new Document();
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
            if (u.equals(doc.getString("usuario")) && p.equals(doc.getString("psw"))) {
                id = doc.getString("usuario");
            } else {
                id = "error";
            }
        } catch (NullPointerException e) {
            id = "error";
        }
        return id;
    }
}
