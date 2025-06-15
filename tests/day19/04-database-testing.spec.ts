import { expect, test } from "@playwright/test";
import { hostname } from "os";
import { Client } from "pg";
import dbCredentials from "../../data/db.json";

test("Database Testing", async () => {
  const client = new Client({ ...dbCredentials });

  // Connect Database
  await client.connect();

  // Query - Response
  const result = await client.query("select * from room where room_number = 1");
  const roomData = result.rows[0];
  // Verify
  expect(roomData.room_number).toBe(1);
  expect(roomData.room_type).toEqual("DELUXE");
});
