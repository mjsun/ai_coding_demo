/**
 * @jest-environment node
 */
import request from "supertest";
import server from "./index";

describe("backend server", () => {
  afterAll(() => {
    server.close();
  });

  it("GET /api/home returns 200 and the dummy response text", async () => {
    const res = await request(server).get("/api/home");

    expect(res.status).toBe(200);
    expect(res.text).toBe("This is a dummy response");
  });

  it("returns 404 for an unknown route", async () => {
    const res = await request(server).get("/api/unknown");

    expect(res.status).toBe(404);
  });
});
