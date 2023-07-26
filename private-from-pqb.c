// gcc private-from-pqb.c -lcrypto -o private-from-pqb.elf
#include <stdlib.h>
#include <openssl/bn.h>
#include <openssl/rsa.h>
#include <openssl/engine.h>

int main (int argc, char *argv[])
{

  BIGNUM *n = BN_new ();
  BIGNUM *d = BN_new ();
  BIGNUM *e = BN_new ();
  BIGNUM *p = BN_new ();
  BIGNUM *q = BN_new ();
  BIGNUM *p1 = BN_new ();
  BIGNUM *q1 = BN_new ();
  BIGNUM *dmp1 = BN_new ();
  BIGNUM *dmq1 = BN_new ();
  BIGNUM *iqmp = BN_new ();
  BIGNUM *phi = BN_new ();
  BN_CTX *ctx = BN_CTX_new ();
  RSA *key = RSA_new ();

  if (argc < 4)
    {
      fprintf (stderr, "usage: %s p q b\n", argv[0]);
      exit (1);
    }

  if (!(BN_dec2bn (&p, argv[1])) || !(BN_dec2bn (&q, argv[2]))) {
      fprintf (stderr, "usage: %s p q b\n", argv[0]);
      exit (1);
  }

  if (!(BN_is_prime_ex (p, BN_prime_checks, ctx, NULL)) ||
      !(BN_is_prime_ex (q, BN_prime_checks, ctx, NULL))) {
      fprintf (stderr, "%s: Arguments must both be prime!\n", argv[0]);
      exit (1);
  }

  BN_dec2bn (&e, argv[3]);
  BN_mul (n, p, q, ctx);
  BN_sub (p1, p, BN_value_one ());
  BN_sub (q1, q, BN_value_one ());
  BN_mul (phi, p1, q1, ctx);
  BN_mod_inverse (d, e, phi, ctx);
  BN_mod (dmp1, d, p1, ctx);
  BN_mod (dmq1, d, q1, ctx);
  BN_mod_inverse (iqmp, q, p, ctx);

  RSA_set0_key(key, n, e, d);
  RSA_set0_factors(key, p, q);
  RSA_set0_crt_params(key, dmp1, dmq1, iqmp);

  if (RSA_check_key(key) != 1) {
    printf("OpenSSL reports internal inconsistency in generated RSA key!\n");
    exit(1);
  }

  RSA_print_fp (stdout, key, 5);
  printf("\n");
  PEM_write_RSAPrivateKey (stdout, key, NULL, NULL, 0, 0, NULL);

  BN_CTX_free (ctx);
  RSA_free(key);
  BN_clear_free (phi);
  BN_clear_free (p1);
  BN_clear_free (q1);

}
