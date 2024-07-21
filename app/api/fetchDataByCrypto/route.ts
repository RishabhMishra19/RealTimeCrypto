export const GET = (req: Request) => {
  return Response.json({
    success: true,
    data: ["BitCoin", "Etherium"],
  });
};
