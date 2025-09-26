@@ .. @@
   const sendMessage = async (message: string) => {
     if (!message.trim()) return;
 
@@ .. @@
     try {
       const response = await fetch(chatbotConfig.n8nWebhookUrl, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
+          'Accept': 'application/json',
           ...(chatbotConfig.apiKey && {
             'Authorization': `Bearer ${chatbotConfig.apiKey}`,
             'X-API-Key': chatbotConfig.apiKey
@@ .. @@
         body: JSON.stringify({
           message: message,
           timestamp: new Date().toISOString(),
           sessionId: sessionId,
-          userId: userId
+          userId: userId,
+          // Additional context for n8n workflow
+          source: 'mofassir-website',
+          language: 'auto-detect',
+          userAgent: navigator.userAgent
         })
       });
 
@@ .. @@
       let botResponse = '';
       
       if (data) {
-        // Handle different response formats from n8n
-        if (typeof data === 'string') {
+        // Enhanced response format handling for n8n
+        if (typeof data === 'string' && data.trim()) {
           botResponse = data;
-        } else if (data.response) {
+        } else if (data.response && typeof data.response === 'string') {
           botResponse = data.response;
-        } else if (data.message) {
+        } else if (data.message && typeof data.message === 'string') {
           botResponse = data.message;
-        } else if (data.text) {
+        } else if (data.text && typeof data.text === 'string') {
           botResponse = data.text;
+        } else if (data.output && typeof data.output === 'string') {
+          botResponse = data.output;
+        } else if (data.result && typeof data.result === 'string') {
+          botResponse = data.result;
         } else {
-          botResponse = 'I received your message, but I\'m having trouble processing it right now.';
+          // Fallback for complex objects
+          botResponse = JSON.stringify(data).includes('error') 
+            ? 'عذراً، حدث خطأ في المعالجة. يرجى المحاولة مرة أخرى.\n\nSorry, there was a processing error. Please try again.'
+            : 'تم استلام رسالتك، لكنني أواجه صعوبة في معالجتها الآن.\n\nI received your message, but I\'m having trouble processing it right now.';
         }
       } else {
-        botResponse = 'I\'m sorry, I didn\'t receive a proper response. Please try again.';
+        botResponse = 'عذراً، لم أتلق رداً مناسباً. يرجى المحاولة مرة أخرى.\n\nI\'m sorry, I didn\'t receive a proper response. Please try again.';
       }
 
@@ .. @@
       });
 
     } catch (error) {
       console.error('Chatbot API Error:', error);
       
       // Enhanced error handling with user-friendly messages
       let errorMessage = 'عذراً، أواجه مشكلة في الاتصال. يرجى المحاولة مرة أخرى.\n\nSorry, I\'m having connection issues. Please try again.';
       
       if (error instanceof TypeError && error.message.includes('fetch')) {
-        errorMessage = 'Unable to connect to the chat service. Please check your internet connection.';
+        errorMessage = 'غير قادر على الاتصال بخدمة الدردشة. يرجى التحقق من اتصال الإنترنت.\n\nUnable to connect to the chat service. Please check your internet connection.';
       }
       
       setMessages(prev => [...prev, {