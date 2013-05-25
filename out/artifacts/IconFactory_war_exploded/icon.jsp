<%@ page import="java.io.*"%>
<%@ page import="java.io.FileOutputStream"%>
<%@ page import="java.io.OutputStream"%>
<%@ page import="sun.misc.BASE64Decoder"%>
<%
	System.out.println("icon.jsp start...");
	//request.setCharacterEncoding("utf-8");
	String dataUrl = request.getParameter("dataUrl"); 
	String path = request.getParameter("path"); 
	String name = request.getParameter("name"); 
	if(dataUrl==null)return;
	BASE64Decoder decoder = new BASE64Decoder();
	// Base64½âÂë
	byte[] bytes = decoder.decodeBuffer(dataUrl);
	for (int i = 0; i < bytes.length; ++i) {
		if (bytes[i] < 0) {
			bytes[i] += 256;
		}
	}
	String filename = request.getRealPath("/");
	System.out.println("path1 " + filename);
	filename = filename + path;
	System.out.println("path2 " + filename);
	System.out.println("create file...");
	File file = new File(filename);
	System.out.println("create file1...");
	if(!file.exists())file.mkdirs();
	System.out.println("create file2...");
	OutputStream out1 = new FileOutputStream(filename + "\\" + name);
	System.out.println("create file3...");
	out1.write(bytes);
	out1.flush();
	out1.close();
	out.write("{\"sucess\":true}");
	out.flush();
	out.close();
%>
