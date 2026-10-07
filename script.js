function enviarWhatsApp(servicio) {
  // Reemplaza con tu número registrado en WhatsApp (Ejemplo México: 52155XXXXXXXX)
  const telefono = "5215500000000"; 
  
  const mensaje = `Hola, vi tu página web y estoy interesado en una cotización para un trabajo de *${servicio}*. ¿Tienes disponibilidad?`;
  
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  
  window.open(url, '_blank');
}