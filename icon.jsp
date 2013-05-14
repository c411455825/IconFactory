<%@ page import="java.io.*"%>
<%@ page import="java.io.FileOutputStream"%>
<%@ page import="java.io.OutputStream"%>
<%@ page import="sun.misc.BASE64Decoder"%>
<%
	System.out.println("icon.jsp start...");
	//request.setCharacterEncoding("utf-8");
	String dataUrl = request.getParameter("dataUrl"); 
	if(dataUrl.equals("null"))return;
	BASE64Decoder decoder = new BASE64Decoder();
	// Base64½âÂë
	byte[] bytes = decoder.decodeBuffer(dataUrl);
	for (int i = 0; i < bytes.length; ++i) {
		if (bytes[i] < 0) {
			bytes[i] += 256;
		}
	}
	String filename = request.getRealPath("t.png");
	OutputStream out1 = new FileOutputStream(filename);
	out1.write(bytes);
	out1.flush();
	out1.close();
%>
