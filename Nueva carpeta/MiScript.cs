using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class MiScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
//EL PERSONAJE
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.InputSystem;
public class PlayerController : MonoBehaviour
{
    public GameObject projectilePrefab;
    public InputAction MoveAction;
    public InputAction LaunchAction;
    public int VidaTotal;
    public int VidaActual;

    private Rigidbody2D rb;
    // Start is called before the first frame update
    void Start()
    {
        VidaActual = VidaTotal;
        LaunchAction.Enable();
        LaunchAction.performed += Launch;
        MoveAction.Enable();
        rb = GetComponent<Rigidbody2D>();
    }

    float mueveTotal = 0.01f;
    float moveUnitsPerSecond = 2.5f;
    Vector2 move;
    // Update is called once per frame
    void Update()
    {
        move = MoveAction.ReadValue<Vector2>();
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Launch();
        }
        //moveKeys();
    }

    void Launch()
    {
        GameObject projectileObject = Instantiate(projectilePrefab, rb.position + Vector2.up * 0.5f, Quaternion.identity);

        EngranajeScript projectile = projectileObject.GetComponent<EngranajeScript>();
        projectile.Launch(move, 300);
    }

    //otra forma de hacer el Launch
    private void Launch(InputAction.CallbackContext context)
    {
        Launch();
    }


    private void FixedUpdate()
    {
        Vector2 posicionActual = rb.position;
        var posicionNueva = posicionActual + (move * moveUnitsPerSecond * Time.deltaTime);
        rb.MovePosition(posicionNueva);
    }

    public void ChangeHealth(int amount)
    {
        VidaActual += amount;
        if (this.VidaActual == 0)
        {
            Destroy(this.gameObject);
        }
    }
//EL ENEMIGO
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static UnityEditor.Searcher.SearcherWindow.Alignment;

public class EnemyController : MonoBehaviour
{
    public int VidaTotal;
    public int VidaActual;
    public float speed = 2.0f;
    public bool vertical;
    public float changeTime = 2.0f;
    bool agresivo = true;

    Rigidbody2D rigidbody2D;
    float timer;
    int direction = 1;
    // Start is called before the first frame update
    void Start()
    {
        VidaActual = VidaTotal;
        rigidbody2D = GetComponent<Rigidbody2D>();
        timer = changeTime;
    }

    // Update is called once per frame
    void Update()
    {
        timer -= Time.deltaTime;

        if (timer < 0)
        {
            direction = -direction;
            timer = changeTime;
        }
    }

    private void FixedUpdate()
    {
        if (agresivo == false) { return; }

        Vector2 position = rigidbody2D.position;

        if (vertical)
        {
            position.y = position.y + (Time.deltaTime * speed * direction);
        }
        else
        {
            position.x = position.x + (Time.deltaTime * speed * direction);
        }

        rigidbody2D.MovePosition(position);
    }

    public void ChangeHealth(int amount)
    {
        VidaActual += amount;
        if (this.VidaActual == 0)
        {
            agresivo = false;
        }
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        if (agresivo == false) { return; }
        PlayerController player = collision.gameObject.GetComponent<PlayerController>();

        if (player != null)
        {
            player.ChangeHealth(-1);
        }
    }
}

//LA FRESA
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FresaScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        PlayerController jugador = collision.GetComponent<PlayerController>();
        if (jugador != null)
        {
            if (jugador.VidaActual < jugador.VidaTotal)
            {
                jugador.ChangeHealth(1);
                Destroy(this.gameObject);
            }
        }
    }

}

//LOS PINCHOS
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PinchosScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        PlayerController jugador = collision.GetComponent<PlayerController>();
        if (jugador != null)
        {
            jugador.ChangeHealth(-1);
        }
    }
}

//EL PROYECTIL
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EngranajeScript : MonoBehaviour
{
    Rigidbody2D rigidbody2d;

    void Awake()
    {
        rigidbody2d = GetComponent<Rigidbody2D>();
    }

    public void Launch(Vector2 direction, float force)
    {
        rigidbody2d.AddForce(direction * force);
    }

    void Update()
    {
        if (transform.position.magnitude > 1000.0f)
        {
            Destroy(gameObject);
        }
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        EnemyController enemigo = collision.collider.GetComponent<EnemyController>();
        if (enemigo != null)
        {
            if (enemigo.VidaActual > 0)
            {
                enemigo.ChangeHealth(-1);
            }
        }

        Destroy(gameObject);
    }
}