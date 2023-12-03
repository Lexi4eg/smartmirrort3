



const  handler = (
) =>{
   return new Response(new Date().toISOString());
}

export { handler as GET, handler as POST };
