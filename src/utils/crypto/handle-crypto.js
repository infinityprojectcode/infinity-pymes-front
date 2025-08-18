// @utils/cryptoClient.js
import * as jose from "jose";

/**
 * Genera un par de claves efímero (RSA-OAEP-256) para este login.
 */
export async function generateEphemeralKeyPair() {
  const { publicKey, privateKey } = await jose.generateKeyPair("RSA-OAEP-256", {
    extractable: true, // necesario para exportar
  });

  const publicJwk = await jose.exportJWK(publicKey);
  return { publicJwk, privateKey };
}

/**
 * Desencripta el blob recibido desde el backend (JWE compacto).
 */
export async function decryptEncryptedBlob(jweCompact, privateKey) {
  const { plaintext } = await jose.compactDecrypt(jweCompact, privateKey);
  const decoded = new TextDecoder().decode(plaintext);
  return JSON.parse(decoded);
}