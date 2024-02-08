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

    //para moverse con teclas V1
    private void moveKeys()
    {
        float moveX = 0.0f;
        float moveY = 0.0f;

        //moverse izquierda
        if (Keyboard.current.aKey.isPressed)
        {
            moveX = -1 * mueveTotal;
        }
        //moverse derecha
        if (Keyboard.current.dKey.isPressed)
        {
            moveX = 1 * mueveTotal;
        }
        //moverse arriba
        if (Keyboard.current.wKey.isPressed)
        {
            moveY = 1 * mueveTotal;
        }
        //moverse abajo
        if (Keyboard.current.sKey.isPressed)
        {
            moveY = -1 * mueveTotal;
        }
        //actualizamos la posici?n
        Vector2 posicionActual = this.transform.position;
        posicionActual.x += moveX;
        posicionActual.y += moveY;
        this.transform.position = posicionActual;
    }

    /*
    Boolean subir = true;
    Boolean avanzar = true;
    void moverese()
    {
        Vector2 posicionActual = this.transform.position;
        //para avanzar
        if (avanzar)
        {
            posicionActual.x = posicionActual.x + 0.01f;
            if (posicionActual.x >= 5f)
            {
                avanzar = false;
            }
        }
        else
        {
            posicionActual.x = posicionActual.x - 0.01f;
            if (posicionActual.x <= -2f)
            {
                avanzar = true;
            }
        }

        //para subir     
        if (subir)
        {
            posicionActual.y = posicionActual.y + 0.01f;
            if (posicionActual.y >= 0.5f)
            {
                subir = false;
            }
        }
        else
        {
            posicionActual.y = posicionActual.y - 0.01f;
            if (posicionActual.y <= 0f)
            {
                subir = true;
            }
        }

        this.transform.position = posicionActual;
    }
    */
}