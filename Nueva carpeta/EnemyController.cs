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
