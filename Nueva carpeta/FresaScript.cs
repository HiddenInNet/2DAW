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
