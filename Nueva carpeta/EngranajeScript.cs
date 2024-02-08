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
