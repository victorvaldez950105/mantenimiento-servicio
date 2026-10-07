function enviarWhatsApp(servicio) {
  // Tu número a 10 dígitos con clave de México (521)
  const telefono = "5215560760561"; 
  
  const mensaje = `Hola, vi tu página web y estoy interesado en una cotización para un trabajo de *${servicio}*. ¿Tienes disponibilidad?`;
  
  // Detecta si es un dispositivo móvil o PC para usar el enlace adecuado
  const esMovil = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  let url = "";
  if (esMovil) {
    url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
  } else {
    url = `https://web.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
  }
  
  window.open(url, '_blank');
}